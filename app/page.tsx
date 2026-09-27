'use client';
import { useMemo, useState } from 'react';
import { matchCreators } from '../lib/match.mjs';
const creators = [
  { name: 'Amara', niche: 'slow travel and city guides', style: 'short video and storytelling', goals: 'travel collaboration', followers: 12000 },
  { name: 'Jonas', niche: 'sustainable fashion', style: 'editorial photography', goals: 'brand collaboration', followers: 8500 },
  { name: 'Leila', niche: 'budget travel food', style: 'short video reviews', goals: 'travel collaboration', followers: 18000 },
  { name: 'Mika', niche: 'technology education', style: 'long form tutorials', goals: 'course collaboration', followers: 15000 }
];
export default function Page() {
  const [profile, setProfile] = useState({ niche: 'travel', style: 'short video', goals: 'collaboration', followers: 10000 });
  const [requested, setRequested] = useState<string[]>([]);
  const matches = useMemo(() => matchCreators(profile, creators), [profile]);
  return <main><div className="eyebrow">CREATOR NETWORK · MATCHING DEMO</div><header><h1>Creator Collab Matchmaker</h1><p>Describe your work and see potential collaborators ranked by shared interests and audience scale.</p></header>
    <section><h2>Your creator profile</h2><div className="grid"><label>Niche<input type="text" value={profile.niche} onChange={e => setProfile({ ...profile, niche: e.target.value })} /></label><label>Content style<input type="text" value={profile.style} onChange={e => setProfile({ ...profile, style: e.target.value })} /></label><label>Goals<input type="text" value={profile.goals} onChange={e => setProfile({ ...profile, goals: e.target.value })} /></label><label>Followers<input type="number" min="0" value={profile.followers} onChange={e => setProfile({ ...profile, followers: Number(e.target.value) })} /></label></div></section>
    <section><h2>Match feed</h2><div className="grid">{matches.map(person => <article key={person.name}><span className="pill">{person.score}% match</span><h3>{person.name}</h3><p>{person.niche}</p><p className="muted">{person.style} · {person.followers.toLocaleString()} followers</p><button onClick={() => setRequested([...new Set([...requested, person.name])])}>{requested.includes(person.name) ? 'Request saved locally' : 'Request collaboration'}</button></article>)}</div></section><footer>Profiles are fictional. Requests stay in this browser and are not sent to real creators. Production matching needs consent, authentication, and a private messaging system.</footer></main>;
}
