"use client";

import { GitFork, Github, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type GitHubUser = {
  public_repos: number;
  html_url: string;
};

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

const FALLBACK_USERNAME = "onesbenrhaime";

export default function GitHubShowcase() {
  const username =
    process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() || FALLBACK_USERNAME;
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">(
    "loading"
  );

  useEffect(() => {
    let active = true;

    async function loadGitHub() {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=4`
          )
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("GitHub request failed");
        }

        const [userData, repoData] = await Promise.all([
          userResponse.json(),
          reposResponse.json()
        ]);

        if (active) {
          setUser(userData);
          setRepos(repoData);
          setStatus("ready");
        }
      } catch {
        if (active) {
          setStatus("fallback");
        }
      }
    }

    loadGitHub();

    return () => {
      active = false;
    };
  }, [username]);

  const repoCount = useMemo(() => {
    if (user?.public_repos) {
      return `${user.public_repos}+`;
    }

    return "91+";
  }, [user]);

  return (
    <section className="section github-section" id="github">
      <div className="section-heading">
        <span className="zone-label zone-label--github">💻 GitHub Outpost</span>
        <h2>Open source signal</h2>
      </div>

      <div className="github-layout">
        <div className="github-panel">
          <div className="github-stat">
            <Github aria-hidden="true" />
            <div>
              <strong>{repoCount}</strong>
              <span>repositories</span>
            </div>
          </div>

          <Image
            className="contribution-graph"
            src={`https://ghchart.rshah.org/111111/${username}`}
            alt={`${username} GitHub contribution graph`}
            width={640}
            height={140}
            unoptimized
          />

          <a
            className="text-link"
            href={user?.html_url || `https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            View full GitHub profile
          </a>
        </div>

        <div className="repo-list" aria-live="polite">
          {status === "loading" && <p className="muted">Loading latest work...</p>}
          {status === "fallback" && (
            <>
              <FallbackRepo
                name="Prime Study"
                description="AI study companion for guided learning experiences."
                language="AI Product"
              />
              <FallbackRepo
                name="Recruitment Automation Platform"
                description="Hiring workflow automation built during Orange Digital Center."
                language="Full Stack"
              />
              <FallbackRepo
                name="My Health Network"
                description="Healthcare dashboard experience for operational visibility."
                language="React"
              />
            </>
          )}
          {status === "ready" &&
            repos.map((repo) => (
              <a
                className="repo-card"
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                key={repo.id}
              >
                <div>
                  <h3>{repo.name}</h3>
                  <p>{repo.description || "Recently updated project by Ones."}</p>
                </div>
                <div className="repo-meta">
                  {repo.language && <span>{repo.language}</span>}
                  <span>
                    <Star aria-hidden="true" /> {repo.stargazers_count}
                  </span>
                  <span>
                    <GitFork aria-hidden="true" /> {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}

function FallbackRepo({
  name,
  description,
  language
}: {
  name: string;
  description: string;
  language: string;
}) {
  return (
    <div className="repo-card">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="repo-meta">
        <span>{language}</span>
      </div>
    </div>
  );
}
