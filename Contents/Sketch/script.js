function duplicateAndNudge(context, dX, dY) {
  var sketch = context.api();
  var selection = sketch.selected_document().selection;
  selection.iterateAndClear(function(layer) {
    var copy = layer.duplicate();
    var f = copy.frame;
    f.x += dX;
    f.y += dY;
    copy.frame = f;
    copy.add_to_selection();
  });
}


function onDown10(context) {
  duplicateAndNudge(context, 0, 10);
}

function onDown1(context) {
  duplicateAndNudge(context, 0, 1);
}

function onUp10(context) {
  duplicateAndNudge(context, 0, -10);
}

function onUp1(context) {
  duplicateAndNudge(context, 0, -1);
}

function onLeft10(context) {
  duplicateAndNudge(context, -10, 0);
}

function onLeft1(context) {
  duplicateAndNudge(context, -1, 0);
}

function onRight10(context) {
  duplicateAndNudge(context, 10, 0);
}

function onRight1(context) {
  duplicateAndNudge(context, 1, 0);
}
