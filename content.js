function removeMediumTags(){
  var icon = "span.svgIcon.svgIcon--star";
  setTimeout(()=>{
    $(icon).closest('div.extremeHero-largeCard').remove();
    $(icon).closest('div.extremeHero-mediumCard').remove();
    $(icon).closest('div.extremeHero-smallCard').remove();
    $(icon).closest('div.streamItem').remove();
    $(icon).closest('div.extremeHero-compact').remove();
    $(icon).closest('div.u-borderBox.js-sectionItem').remove();
    removeMediumTags();
  }, 500);
}
removeMediumTags();
