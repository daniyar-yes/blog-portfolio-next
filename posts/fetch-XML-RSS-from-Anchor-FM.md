---
title: "How to fetch RSS feed from Anchor.fm in JS"
date: "2023-01-15"
---

When working with RSS feed from Anchor.fm / Spotify you should remember 2 things : first, **it's NOT a JSON, it's an XML document** and therefore **you should not use `fetch` but XMLHttpRequest** instead. The difference is in **how you parse strings** from JSON and XML.

- **XML response** from Anchor.fm is a <strong>Nodelist</strong> type document, which means you can't apply JSON methods, but should use HTML / XML methods such as **querySelector(`tagname(s)`)** instead. After understanding the tree structure of your RSS feed, you should be able to get the textContent or innerHTML of the desired XML elements.
- **Use XMLHttpRequest** instead of fetch. This is the recommended method by MDN that returns the whole Document, and you should use querySelector to get the contents and store them as values in your JS app. Below is the example for React client-side app using RSS from Anchor.fm, but for Vanilla JS solution you should use the code inside of **useEffect hook below**.

  ```
  useEffect(() => {

  const xhr = new XMLHttpRequest;
  xhr.open('GET', rss);
  xhr.responseType = 'document';
  xhr.overrideMimeType('text/xml');
  xhr.onload = () => {
      if (xhr.readyState === xhr.DONE && xhr.status === 200)
          { const response = xhr.responseXML};
  xhr.send()

  }, [])
  ```

Then you can work with the returned `response` value from the succesfull `if` block in the `xhr.onload` function. Response will contain the XML document (nodelist, like HTML document) and you can then pass it as an argument to your helper functions that get actual values from the XML doc. For example:

```
    const getPodcastName = (resXML) => {
      const name = resXML.querySelector('channel title').textContent;
      return name;
   }
```

In this `getPodcastName` function we simply get contents of the `title` tag inside the `channel` tag of the XML RSS document, and return it's textContent in the variable called `name`. Apply the same logic to extract any data that you need from the XML doc that you have.

```

```
