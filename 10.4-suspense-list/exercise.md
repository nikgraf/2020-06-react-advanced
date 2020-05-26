# Exercise

1. Wrap `<Profile username={username} />` and `<Repositories username={username} />` into a `<SuspenseList revealOrder="forwards">` and verify it's working.

2. Change the `revealOrder` prop to `backwards` and verify the behaviour.

3. Change the `tail` prop to `collapsed` and verify that now only one loading indicator is shown.

**Hint**: You can find explainations on these props in here: https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist

**Hint**: Slow down the network performance to see the effect. In Chrome/Brave developers tools under the "Performance" tab you can switch network to "Fast 3G"
