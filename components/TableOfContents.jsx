import React from "react";
import "../src/css/toc.css";

/**
 * A Table of Contents for the Honeycomb Docs page
 *
 * @param {*} param0
 * @returns
 */
export default function TableOfContents() {
  return (
    <div className="TOC-container">
      <h2>Table of Contents</h2>
      <div className="TOC-content">
        <div className="TOC-col">
          <ul>
            <li>
              <a href="../docs">Introduction</a>
            </li>
            <li>
              <a href="../docs/quick_start">Quick Start</a>
            </li>
            <li>
              <a href="../docs/prerequisites">Prerequisites</a>
            </li>
            <li>
              Project Organization
              <ul>
                <li>
                  <a href="../docs/directory_structure">Directory Structure</a>
                </li>
                <li>
                  <a href="../docs/npm_scripts">NPM Scripts</a>
                </li>
                <li>
                  <a href="../docs/environment_variables">
                    Environment Variables
                  </a>
                </li>
                <li>
                  <a href="../docs/ci_cd">
                    Continuous Integration / Deployment
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="TOC-col">
          <ul>
            <li>
              Deployment
              <ul>
                <li>
                  <a href="../docs/local_application">Local Application</a>
                </li>
                <li>
                  <a href="../docs/firebase">Firebase</a>
                </li>
                <li>
                  <a href="../docs/psiturk">PsiTurk</a>
                </li>
                <li>
                  <a href="../docs/gh_pages">GitHub Pages</a>
                </li>
              </ul>
            </li>
            <li>
              External Tools
              <ul>
                <li>
                  <a href="../docs/event_triggers">Event Triggers</a>
                </li>
                <li>
                  <a href="../docs/prolific">Prolific</a>
                </li>
              </ul>
            </li>
            <li>
              Further Reading
              <ul>
                <li>
                  <a href="../docs/github_discussions">Github Discussions</a>
                </li>
                <li>
                  <a href="../docs/version_control">Version Control</a>
                </li>
                <li>
                  <a href="../docs/javascript">JavaScript</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="../docs/troubleshooting">Troubleshooting</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
