function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();
  
  function optionChanged(newSample) {
    buildMetadata(newSample);
  //  buildCharts(newSample);
    }

//create buildMetadata() function to populate the city/state from demographic info panel
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").console.log(result);
    });
  }

//Skill Drill 12.4.3
//modify buildMetadata() function to populate all the demographic data from demographic info panel
// 
