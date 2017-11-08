function removeMediumTags(){
  setTimeout(()=>{
    $("span.svgIcon.svgIcon--lockStory").closest('div.heroGrid-largeCard').remove();
    $("span.svgIcon.svgIcon--lockStory").closest('div.heroGrid-mediumCard').remove();
    $("span.svgIcon.svgIcon--lockStory").closest('div.heroGrid-smallCard').remove();
    $("span.svgIcon.svgIcon--lockStory").closest('div.heroGrid-compact').remove();
    $("span.svgIcon.svgIcon--lockStory").closest('div.u-borderBox.js-sectionItem').remove();
    removeMediumTags();
  }, 500);
}
removeMediumTags();

