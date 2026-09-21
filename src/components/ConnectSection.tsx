import { useState } from 'react';

const RESUME_URL = 'https://drive.google.com/file/d/1QA4K-CmWLUm7U_Sq6yiCXl6hq19ORX1p/view';
const EMAIL = 'nishantbahri@gmail.com';

const ConnectSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="connect" className="animate space-y-4">
      <h5 className="font-semibold text-black dark:text-white text-lg">
        Let's Connect
      </h5>
      <article>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
          If you want to get in touch with me about data platform initiatives, engineering roles, or just to say hi, reach out on social media or send me an email.
        </p>
      </article>

      <ul className="flex flex-wrap items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
        <li className="flex gap-x-2 text-nowrap">
          <a
            href="https://github.com/nishantbahri"
            target="_blank"
            rel="noopener noreferrer"
            className="jrzs-link"
            aria-label="Nishant Bahri on github"
          >
            github
          </a>
          <span>/</span>
        </li>
        <li className="flex gap-x-2 text-nowrap">
          <a
            href="https://linkedin.com/in/nishant-bahri"
            target="_blank"
            rel="noopener noreferrer"
            className="jrzs-link"
            aria-label="Nishant Bahri on linkedin"
          >
            linkedin
          </a>
          <span>/</span>
        </li>
        <li className="flex gap-x-2 text-nowrap items-center">
          <button
            onClick={handleCopyEmail}
            className="jrzs-link text-left"
            title="Click to copy email"
            aria-label="Copy Email"
          >
            {EMAIL}
          </button>
          {copied && (
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 animate-fadeIn">
              (copied!)
            </span>
          )}
          <span>/</span>
        </li>
        <li className="flex gap-x-2 text-nowrap">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="jrzs-link"
            aria-label="View Nishant Bahri Resume"
          >
            resume
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ConnectSection;
