function tokens(value) { return new Set(String(value).toLowerCase().match(/[a-z0-9]{3,}/g) ?? []); }
export function matchCreators(me, others) {
  const mine = tokens(`${me.niche} ${me.style} ${me.goals}`);
  return others.map(person => {
    const theirs = tokens(`${person.niche} ${person.style} ${person.goals}`);
    const intersection = [...mine].filter(token => theirs.has(token)).length;
    const union = new Set([...mine, ...theirs]).size || 1;
    const audienceRatio = Math.min(Number(me.followers) || 0, Number(person.followers) || 0) / Math.max(Number(me.followers) || 0, Number(person.followers) || 0, 1);
    return { ...person, score: Math.round((intersection / union * 0.75 + audienceRatio * 0.25) * 100) };
  }).sort((a, b) => b.score - a.score);
}
