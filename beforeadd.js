ghpages.publish('dist', {
    add: true,
    async beforeAdd(git) {
      return git.add('./.nojekyll');
    }
  }, callback);