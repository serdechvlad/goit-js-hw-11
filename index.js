import{a as c,S as l,i}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="ваш_ключ_доступу",f="https://pixabay.com/api/";async function m(s){const t={key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await c.get(f,{params:t})).data.hits}function d(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(o=>`
    <li class="gallery-item">
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}">
      </a>
    </li>
  `).join(""),new l(".gallery a").refresh()}function y(){const s=document.querySelector(".gallery");s.innerHTML=""}document.querySelector(".form").addEventListener("submit",async s=>{s.preventDefault();const t=s.target["search-text"].value.trim();if(!t){i.error({title:"Error",message:"Please enter a search term."});return}y();try{const o=await m(t);o.length===0?i.info({title:"Info",message:"Sorry, no images found."}):d(o)}catch{i.error({title:"Error",message:"Failed to fetch images."})}});
//# sourceMappingURL=index.js.map
