Embed hackdash projects
=======================

Usage
-----

Insert this HTML in your page, and put the event tag on the hackdash projects in `data-tag`.

```html
<script src="https://hackdash-embed.netlify.com/embed.js" defer></script>
<div id="hackdash-embed" data-tag="...put event tag here like Northern Cape..."></div>
```

Development
-----------

Run the following and open `dist/index.html`

```
npm run dev
```

Production deployment
---------------------

Run

```
npm run build
```

and host `dist`
