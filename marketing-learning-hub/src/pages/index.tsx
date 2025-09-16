import * as React from 'react';
import Layout from '@theme/Layout';
import { LearnCard } from '../components/LearnCard';
import '../css/custom.css';

export default function Home() {
  return (
    <Layout>
      <header style={{ textAlign: 'center', margin: '3rem 0 2rem' }}>
        <img src="/img/logo.svg" alt="Marketing Learning Paths Logo" style={{ width: 80, marginBottom: 16 }} />
        <h1>Marketing Learning Paths</h1>
        <p>Learn marketing the modern way—tracks, modules, and quizzes.</p>
        <div style={{ margin: '2rem 0' }}>
          <a className="button button--primary" href="/">Start Learning</a>
          <a className="button button--secondary" href="/tracks/beginner-week1" style={{ marginLeft: 16 }}>View Tracks</a>
        </div>
        <div style={{ marginTop: '2rem', fontSize: '1.1em' }}>
          <strong>How it works:</strong>
          <ol style={{ display: 'inline-block', textAlign: 'left', margin: '1em auto', maxWidth: 400 }}>
            <li>Pick a Track</li>
            <li>Complete weekly Modules</li>
            <li>Attempt Quiz</li>
            <li>Apply via Projects</li>
          </ol>
        </div>
      </header>
      <main>
        <section>
          <h2>Tracks</h2>
          <div className="learn-grid">
            <LearnCard title="Beginner Track" description="Start with marketing foundations." href="/tracks/beginner-week1" badge="Week 1" />
            <LearnCard title="Intermediate Track" description="Content, SEO, and social strategy." href="/tracks/intermediate-week3" badge="Week 3" />
            <LearnCard title="Advanced Track" description="Paid ads and analytics." href="/tracks/advanced-growth-week5" badge="Week 5" />
            <LearnCard title="Capstone" description="Final project and analytics." href="/tracks/capstone-week6" badge="Week 6" />
          </div>
        </section>
        <section>
          <h2>Modules</h2>
          <div className="learn-grid">
            <LearnCard title="Foundations" description="Intro to marketing principles." href="/modules/foundations/intro-to-marketing" />
            <LearnCard title="Content & SEO" description="SEO basics and content strategy." href="/modules/content-seo/seo-basics" />
            <LearnCard title="Social" description="Social media strategy." href="/modules/social/social-strategy" />
            <LearnCard title="Email & CRM" description="CRM and email campaigns." href="/modules/email-crm/crm-fundamentals" />
            <LearnCard title="Paid Ads" description="Paid media and advertising." href="/modules/paid-ads/paid-media-101" />
            <LearnCard title="Analytics" description="Marketing analytics basics." href="/modules/analytics/marketing-analytics-basics" />
          </div>
        </section>
        <section>
          <h2>Quizzes</h2>
          <div className="learn-grid">
            <LearnCard title="Quiz Templates" description="MCQ, True/False, Short Answer." href="/quizzes/quiz-templates" />
            <LearnCard title="Week 1 Quiz" description="Foundations of marketing." href="/quizzes/week1-quiz" />
          </div>
        </section>
        <section>
          <h2>Resources</h2>
          <div className="learn-grid">
            <LearnCard title="Videos" description="Curated marketing videos." href="/resources/videos" />
            <LearnCard title="Tutorials" description="Step-by-step guides." href="/resources/tutorials" />
            <LearnCard title="Templates" description="Downloadable resources." href="/resources/templates" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
