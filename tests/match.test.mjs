import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { matchCreators } from '../lib/match.mjs';
test('ranks shared niches ahead of unrelated niches', () => {
  const matches = matchCreators({ niche: 'travel', style: 'video', goals: 'collab', followers: 1000 }, [{ name: 'A', niche: 'travel', style: 'video', goals: 'collab', followers: 1000 }, { name: 'B', niche: 'gaming', style: 'stream', goals: 'sales', followers: 1000 }]);
  assert.equal(matches[0].name, 'A');
});
