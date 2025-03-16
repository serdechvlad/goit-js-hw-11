import{a as c,S as f,i as a}from"./assets/vendor-DXaqCXe3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="49374339-6c81470c324f76695f53d1c98",d="https://pixabay.com/api/";async function p(r){const o={key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await c.get(d,{params:o})).data.hits}catch{throw new Error("Failed to fetch images")}}let l;function m(r){const o=document.querySelector(".gallery"),s=r.map(i=>`
      <li class="gallery-item">
        <a href="${i.largeImageURL}">
          <img src="${i.webformatURL}" alt="${i.tags}">
        </a>
        <div class="image-info">
          <p>Likes: ${i.likes}</p>
          <p>Views: ${i.views}</p>
          <p>Comments: ${i.comments}</p>
          <p>Downloads: ${i.downloads}</p>
        </div>
      </li>
    `).join("");o.innerHTML=s,l?l.refresh():l=new f(".gallery a")}function y(){const r=document.querySelector(".gallery");r.innerHTML=""}function g(){const r=document.querySelector(".loader");r.style.display="block"}function h(){const r=document.querySelector(".loader");r.style.display="none"}document.querySelector(".form").addEventListener("submit",async r=>{r.preventDefault();const o=r.target["search-text"].value.trim();if(!o){a.error({title:"Error",message:"Please enter a search term.",position:"topRight"});return}g(),y();try{const s=await p(o);s.length===0?a.info({title:"Info",message:"Sorry, no images found.",position:"topRight"}):m(s)}catch(s){a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("Error fetching images:",s)}finally{h()}});
//# sourceMappingURL=index.js.map
