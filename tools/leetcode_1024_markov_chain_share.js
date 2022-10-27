cards = [];
document.querySelectorAll('.css-x4f0ix').forEach(i => {
  if (!i.contains(i.querySelector(".css-6ntt6k"))) {
    cards.push(`${i.querySelector(".css-13bqg16").childNodes[0].innerText}: https://leetcode.cn/2022-1024?id=${i.querySelector(".css-13bqg16").childNodes[1].childNodes[1].attributes['data-id'].nodeValue}&userSlug=yuchixiong`);
  }
});
console.log(cards.join('\n'));