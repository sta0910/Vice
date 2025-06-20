function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};
Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
Color.prototype.s1mple = function () {
    const { r, g, b } = this;
    return `${r}と${g}と${b}はmajor`
}

Color.prototype.rgba = function (a = 1.0) {
      const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;

}

const color1 = new Color(100, 100, 12);
const color2 = new Color(50, 50, 50);
