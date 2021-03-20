let r; let g; let b; let a;
const body = document.body;
const hex = document.getElementById("hex");
const rgb = document.getElementById("rgb");
const rgbLabel = document.getElementById("rgb-label");
const hexLabel = document.getElementById("hex-label");
const inputs = document.getElementsByTagName("input");

changeBackground = () => {
  if (hex.value.length < 3) {
    body.style.backgroundColor = "rgba(18,52,86,0.3)";
    darkForeground();
  } else if (hex.value.length != 5 && hex.value.length != 7) {
    body.style.backgroundColor = "#" + hex.value;
    changeForeground();
  }
};

rgbToHex = () => {
  let hexValue = document.getElementById("hex").value;
  if (hexValue.length < 3 || hexValue.length == 5 || hexValue.length == 7) {
    rgb.value = "";
    changeBackground();
    return;
  }
  a = undefined;
  if (hexValue.length == 3) {
    r = parseInt(hexValue[0] + hexValue[0], 16);
    g = parseInt(hexValue[1] + hexValue[1], 16);
    b = parseInt(hexValue[2] + hexValue[2], 16);
  } else if (hexValue.length == 4) {
    r = parseInt(hexValue[0] + hexValue[0], 16);
    g = parseInt(hexValue[1] + hexValue[1], 16);
    b = parseInt(hexValue[2] + hexValue[2], 16);
    a = (parseInt(hexValue[3] + hexValue[3], 16) / 255).toFixed(1);
  } else if (hexValue.length == 6) {
    r = parseInt(hexValue[0] + hexValue[1], 16);
    g = parseInt(hexValue[2] + hexValue[3], 16);
    b = parseInt(hexValue[4] + hexValue[5], 16);
  } else if (hexValue.length == 8) {
    r = parseInt(hexValue[0] + hexValue[1], 16);
    g = parseInt(hexValue[2] + hexValue[3], 16);
    b = parseInt(hexValue[4] + hexValue[5], 16);
    a = (parseInt(hexValue[6] + hexValue[7], 16) / 255).toFixed(1);
  }
  
  if (!validate(r, g, b, a)) {
    rgb.value='';
    return;
  }

  if (a && a!=-1 && a!='NaN') rgb.value = `rgb(${r}, ${g}, ${b}, ${a})`;
  else rgb.value = `rgb(${r}, ${g}, ${b})`;
  changeBackground();
};

changeForeground = () => {
  if (+r + +g + +b <= 382) {
    lightForeground();
    if (a && a <= 0.5) darkForeground();
    else if (a && a > 0.5) lightForeground();
  } else {
    darkForeground();
    if (a && a <= 0.5) lightForeground();
    else if (a && a > 0.5) darkForeground();
  }
};

darkForeground = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.color = "#000";
    inputs[i].style.borderBottomColor = "#000";
  }
  rgbLabel.style.color = "#000";
  hexLabel.style.color = "#000";
};

lightForeground = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.color = "#fff";
    inputs[i].style.borderBottomColor = "#fff";
  }
  rgbLabel.style.color = "#fff";
  hexLabel.style.color = "#fff";
};

validate = (r, g, b, a = -1) => {
  if((!r && r!=0)|| (!g && g!=0) || (!b && b!=0)) return false;
  if(!a && a!=-1 && a!='NaN') return false;
  return true;
};
