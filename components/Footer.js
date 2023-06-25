import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export function Footer() {
  return (
    <footer className="mt-16">
      <div className="border-t border-zinc-300 pt-10 pb-16 dark:border-zinc-600/40">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          <h3 className="text-sm text-zinc-400 dark:text-zinc-500">Social Media</h3>
            <a href="https://github.com/afifsyaifullah1512" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/afif-syaifullah" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            Afif Syaifullah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

