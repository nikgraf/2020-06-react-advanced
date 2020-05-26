# Exercise

1. Inspect the network waterfall with and without the `prefetch` functions. Notice the difference?

```
prefetch(`https://api.github.com/users/nikgraf`);
prefetch(`https://api.github.com/users/nikgraf/repos`);
```

**Hint**: Slow down the network performance to see the effect. In Chrome/Brave developers tools under the "Performance" tab you can switch network to "Fast 3G"
