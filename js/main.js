$( document ).ready(function() {
  $( ".commitment" ).change(function() {
      var commitmentInput = $(".commitment").val();
      var commitmentText = commitmentInput;
      var commitmentConvert = encodeURI(commitmentText);
      console.log(commitmentConvert);

      $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + "Let's do it. This year I'm going gray for " + commitmentConvert +". Read the article by @russpate " + "https://medium.com/@russpate/the-practice-of-being-gray-ee21808b6d87")
  });

});
