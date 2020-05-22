/*
<!--
************
*
* VOTE: https://bit.ly/Vote4PixelBE
* STORE: https://pixelbe.buycraft.net
* TWITTER: https://twitter.com/PixelBedrock
* DISCORD: https://discord.gg/xBWCDVX
*
************
*
* Framework(s): Bulma 0.8.0
* Libraries: Font Awesome 5.4.1, Google Fonts x.x.x
* @author: Isla<3 aka lichKing112#8803
*
************
-->
*/
// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();


 

/*
<!--
************
*
* VOTE: https://bit.ly/Vote4PixelBE
* STORE: https://pixelbe.buycraft.net
* TWITTER: https://twitter.com/PixelBedrock
* DISCORD: https://discord.gg/xBWCDVX
*
************
*
* Framework(s): Bulma 0.8.0
* Libraries: Font Awesome 5.4.1, Google Fonts x.x.x
* @author: Isla<3 aka lichKing112#8803
*
************
-->
*/