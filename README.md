# Typescript Basics

## Resources

1. [TypeScript in 5 min.](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
2. [TypeScript with Gulp](https://www.typescriptlang.org/docs/handbook/gulp.html)

    ```shell
    $ npm run gulp # this will execute the tasks in gulpfile.js
    $ node dist/main.js # this will output main.js in the distribution folder

    # => Hello from Johnny!
    # => Hello from TypeScript
    ```
3. [TypeScript with Browserify](https://www.typescriptlang.org/docs/handbook/gulp.html#browserify)

    Example to manually compile a TypeScript file with browserify:

    ```shell
    $ cd src/
    $ browserify main.ts -p [ tsify --noImplicitAny ] > bundle.js
    ```

## Troubleshooting

### Gulp - TypeError: Cannot read property 'apply' of undefined

```shell
# Error

[15:31:38] Using gulpfile ~/<REDACTED>/gulpfile.js
/usr/local/lib/node_modules/gulp/bin/gulp.js:129
    gulpInst.start.apply(gulpInst, toRun);
                   ^
TypeError: Cannot read property 'apply' of undefined
    at /usr/local/lib/node_modules/gulp/bin/gulp.js:129:20
    at processTicksAndRejections (internal/process/task_queues.js:75:11)
```

If you can't run gulp with `$ gulp` you may use this snippet in the terminal or place it in `package.json`:

  ```shell
  $ node ./node_modules/gulp/bin/gulp.js # OR:
  $ npm run gulp # after script has been placed in package.json
  ```

More soon...
