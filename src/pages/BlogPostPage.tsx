import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { posts } from '@/data/posts';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAnimateOnLoad } from '@/hooks/useAnimateOnLoad';

const renderFormattedText = (text: string) => {
  const parts: (string | React.ReactNode)[] = [];
  let lastIndex = 0;
  const regex = /(\*\*(.*?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    if (match[2] !== undefined) {
      parts.push(
        <strong key={match.index} className="font-semibold text-black dark:text-white">
          {match[2]}
        </strong>
      );
    } else if (match[3] !== undefined) {
      parts.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-xs text-neutral-800 dark:text-neutral-200"
        >
          {match[3]}
        </code>
      );
    } else if (match[4] !== undefined && match[5] !== undefined) {
      const href = match[5];
      const isExternal = href.startsWith('http');
      parts.push(
        isExternal ? (
          <a
            key={match.index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="jrzs-link"
          >
            {match[4]}
          </a>
        ) : (
          <Link key={match.index} to={href} className="jrzs-link">
            {match[4]}
          </Link>
        )
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
};

const BlogPostPage = () => {
  useAnimateOnLoad();
  const { slug } = useParams<{ slug: string }>();

  const post = posts.find((p) => p.slug === slug) || posts[0];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        <div className="mx-auto max-w-screen-sm px-5 py-6 space-y-8">
          <div className="animate">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm jrzs-link text-neutral-600 dark:text-neutral-400"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to blog</span>
            </Link>
          </div>

          <article className="animate space-y-6">
            <div className="space-y-2">
              <div className="text-xs text-neutral-500 font-mono">
                {post.date} {post.readingTime && `• ${post.readingTime}`}
              </div>
              <h1 className="font-semibold text-2xl md:text-3xl text-black dark:text-white leading-tight">
                {post.title}
              </h1>
              {post.subtitle && (
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed pt-1">
                  {post.subtitle}
                </p>
              )}
            </div>

            {post.tags && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="border-t border-black/10 dark:border-white/10 pt-6 space-y-6 text-neutral-800 dark:text-neutral-200 leading-relaxed text-sm md:text-base">
              {post.content ? (
                <div className="space-y-4">
                  {post.content.split('\n\n').map((paragraph, idx) => {
                    const trimmed = paragraph.trim();

                    if (trimmed.startsWith('### ')) {
                      return (
                        <h3 key={idx} className="font-semibold text-lg text-black dark:text-white pt-4">
                          {renderFormattedText(trimmed.replace('### ', ''))}
                        </h3>
                      );
                    }
                    if (trimmed.startsWith('#### ')) {
                      return (
                        <h4 key={idx} className="font-semibold text-base text-black dark:text-white pt-2">
                          {renderFormattedText(trimmed.replace('#### ', ''))}
                        </h4>
                      );
                    }
                    if (trimmed.startsWith('```')) {
                      const codeText = trimmed.replace(/```[a-z]*/, '').replace(/```$/, '').trim();
                      return (
                        <pre
                          key={idx}
                          className="bg-neutral-100 dark:bg-neutral-900 border border-black/10 dark:border-white/15 p-4 rounded-lg overflow-x-auto font-mono text-xs md:text-sm text-neutral-800 dark:text-neutral-200"
                        >
                          <code>{codeText}</code>
                        </pre>
                      );
                    }
                    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                      const items = trimmed.split('\n').filter((l) => l.trim().length > 0);
                      return (
                        <ul key={idx} className="list-disc pl-5 space-y-1.5 py-1">
                          {items.map((item, iIdx) => (
                            <li key={iIdx}>
                              {renderFormattedText(item.replace(/^[-*]\s+/, ''))}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (trimmed.startsWith('---')) {
                      return <hr key={idx} className="border-black/10 dark:border-white/10 my-6" />;
                    }

                    return (
                      <p key={idx} className="leading-relaxed">
                        {renderFormattedText(trimmed)}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <p>{renderFormattedText(post.description)}</p>
              )}
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
