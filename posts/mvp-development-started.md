---
title: 'MVP Development started'
date: '2021-04-01'
---

The prototype of Katie is working successfully. We have now started the development of Katie as Minimum Viable Product.
<br><br/>
For the next three months we are focusing on:<br><br/>

- Quality of answers
- Ease of use (UI/UX)
- Design
- Full automation
- Scalability and performance
- Multilingualism<br><br/>

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.
<br><br/>
On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
