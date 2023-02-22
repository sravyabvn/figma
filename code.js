figma.showUI(__html__);
function runPlugin() {
    let selectedElemts = figma.currentPage.selection.length

    if(selectedElemts === 0)
    {
        figma.closePlugin("No elemnts selected")
        return
    }

    if(selectedElemts > 1)
    {
        figma.closePlugin("Select a single element")
        return
    }

    let selectedName = figma.currentPage.selection[0].name

    function hasSameName(node) {
        return node.name === selectedName
    }
    let withSameName = figma.currentPage.findAll(hasSameName)

    figma.currentPage.selection = withSameName
    let a = figma.currentPage.selection["0"].fontSize;
    //let b = figma.showUI(__html__, { themeColors: true, /* other options */ })
    //console.log(a);
    //figma.closePlugin(a)

    

figma.on("selectionchange",() => {
  if (msg.type === "generate-styles") {
    // Get text styles to generate text variants
    const textStyles = figma.getLocalTextStyles();

    const textVariants = textStyles.map(
      ({
        id,
        name,
        fontName,
        fontSize,
        letterSpacing,
        lineHeight,
        textCase,
        textDecoration,
      }) => ({
        name,
        //fontFamily: fontName!.family,
        fontWeight: fontName.style,
        fontSize,
        letterSpacing,
        lineHeight,
        textCase,
        textDecoration,
      })
    );

		console.log('text styles', textVariants)
  }
})
figma.closePlugin();
};

runPlugin()
