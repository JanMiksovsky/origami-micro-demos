This demo explores building a site from a folder tree that reflects the desired structure of the site and contains two special kinds of files:

- `.ori.html` templates: These are mapped so that a file `X.ori.html` produces `X.html`
- spread templates: These have names that start with the `…` ellipsis character and define a tree. The values from that tree will be merged into the containing folder.

The `structure` folder contains the files that define the demo site. The `structure/posts` folder defines a `/posts` area containing an `index.html` page and pages for each of the posts in the `markdown` folder.
