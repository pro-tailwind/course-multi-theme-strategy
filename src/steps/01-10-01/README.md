# Let's try our multi-theme plugin in a real app!

It's time to try our multi-theme Tailwind CSS plugin in a "real-world" application.

You can take this challenge [directly on GitPod](https://gitpod.io/#https://github.com/pro-tailwind/course-multi-theme-calendar-app/blob/main/tailwind.config.js).

If you want to clone the actual repo, here's the link:

https://github.com/pro-tailwind/course-multi-theme-calendar-app

The code for the plugin (at this point in the course) has been copied over to the `plugins/multi-theme.js` file.

The first step is to register the `multi-theme` plugin in the project's `tailwind.config.js` file.

## Some implementation suggestions

### Start small, with one component!

Open `components/background-decoration.jsx`. Try replacing all instances of `indigo` with our `primary` theme color.

What happened? Is that what you expected?

Now add a the `data-theme="candy"` attribute to the parentmost element on that component.

Is it working?

### Ready to roll out theming to the whole app?

How about YOLO-ing a project-wide "search and replace" and change all instances of `indigo` to `primary`?

After that, go in the `pages/_app.jsx` file. This is the "shell" that is common to all pages in a Next.js project.

We could add a `data-theme` attribute there (try it!), but you'll hit subtle problems that way.

Things like the `timezone-picker` components get injected in a `Portal` which sits **outside** of this app shell. So the background color of the timezone picker modal will not change!

Luckily we've got a <ThemeSwitcher /> component ready at the start of the `_app.jsx` markup.

Have a look at that file to see what it does!

This component takes care of adding the data-attribute to the <body> element, and also provides a sweet dropdown menu on the top-right of our app.

You can see we're using an `activeTheme` piece of state, set to "base" by default.

Uncomment that <ThemeSwitcher /> line in `_app,jsx`, and toggle themes with the neat little switcher on the top right!

### Remember, our theming strategy is "nestable"

Just for fun, try add different theme scopes to different components, just to see how powerful our composable theming strategy is!
