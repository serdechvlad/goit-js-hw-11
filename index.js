import{a as c,S as f,i as a}from"./assets/vendor-DXaqCXe3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="49374339-6c81470c324f76695f53d1c98",d="https://pixabay.com/api/";async function m(r){const o={key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await c.get(d,{params:o})).data.hits}catch{throw new Error("Failed to fetch images")}}let l;function p(r){const o=document.querySelector(".gallery"),n=r.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}">
        </a>
        <div class="image-info">
          <p>Likes: ${s.likes}</p>
          <p>Views: ${s.views}</p>
          <p>Comments: ${s.comments}</p>
          <p>Downloads: ${s.downloads}</p>
        </div>
      </li>
    `).join("");o.innerHTML=n,l?l.refresh():l=new f(".gallery a")}function y(){const r=document.querySelector(".gallery");r.innerHTML=""}function g(){const r=document.querySelector(".loader");r.style.display="block"}function h(){const r=document.querySelector(".loader");r.style.display="none"}document.querySelector(".form").addEventListener("submit",async r=>{r.preventDefault();const o=r.target["search-text"].value.trim();if(!o){a.error({title:"Error",message:"Please enter a search term."});return}g(),y();try{const n=await m(o);n.length===0?a.info({title:"Info",message:"Sorry, no images found."}):p(n)}catch{a.error({title:"Error",message:"Failed to fetch images."})}finally{h()}});
//# sourceMappingURL=index.js.map
