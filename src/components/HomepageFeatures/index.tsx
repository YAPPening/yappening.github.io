import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fancy Features',
    description: (
      <>
        YAPP lets you integrate your history class' research paper syllabus with the application, lets you make a custom to-do list,
        records your streaks, progress, and milestones, and has built-in searching and organizing features for notecards.
      </>
    ),
  },
  {
    title: 'Cheap & Efficient',
    description: (
      <>
        A single-user NoodleTools account on the cheapest plan costs $180/year. YAPP costs a tiny fraction of that to serve 150 people.
        Additionally, YAPP is lightweight and efficient, and is more evironmentally friendly 
        than <a href="https://www.websitecarbon.com/website/yapp-6e048-web-app/">99%</a> of websites.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        YAPP is is licensed under Apache 2.0, and is available here: 
        <a href="github.com/ethqnol/YAPP"> github.com/ethqnol/YAPP</a>. Anybody can contribute,
        submit bug reports, and request features. It is transparent, and will likely have more future features than NoodleTools.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div>
      <h1 className={styles.featuresContainer}>Why YAPP? </h1>
      <section className={styles.features}>
        
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
