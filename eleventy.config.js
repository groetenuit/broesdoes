import fs from "node:fs";
import markdownIt from "markdown-it";

// Op GitHub Pages zonder eigen domein staat de site onder /gud/.
// De workflow zet PATH_PREFIX; lokaal en met eigen domein blijft het "/".
const pathPrefix = process.env.PATH_PREFIX || "/";

export default function (eleventyConfig) {
  // Zet Markdown om naar HTML (nodig voor rich-text velden in Pages CMS)
  const md = markdownIt({ html: true, breaks: true, linkify: true });
  eleventyConfig.addFilter("markdownify", (content) => {
    return content ? md.render(content) : "";
  });

  // Bestanden die ongewijzigd naar de uitvoermap gaan
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  if (fs.existsSync("src/fonts")) eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });
  if (fs.existsSync("src/js")) eleventyConfig.addPassthroughCopy({ "src/js": "js" });

  // Zo blijven de bestaande "layout: default" in je pagina's (en in Pages CMS) werken
  eleventyConfig.addLayoutAlias("default", "default.html");
  eleventyConfig.addLayoutAlias("home", "home.html");
  eleventyConfig.addLayoutAlias("project", "project.html");
  eleventyConfig.addLayoutAlias("contact-layout", "contact-layout.html");

  // Bouwt een veilige e-mail-link op (ook veilig in openbare GitHub-repositories)
  eleventyConfig.addShortcode("veiligeMail", function (tekst, gebruiker, domein) {
    const g = Buffer.from(gebruiker).toString("base64");
    const d = Buffer.from(domein).toString("base64");
    const js = `this.href='mailto:'+atob(this.dataset.u)+'@'+atob(this.dataset.d)`;
    return `<a href="#contact" rel="nofollow" data-u="${g}" data-d="${d}" onmouseover="${js}" onclick="${js}">${tekst}</a>`;
  });

  // Bouwt een veilige telefoon-link op (ook veilig in openbare GitHub-repositories)
  eleventyConfig.addShortcode("veiligeTel", function (tekst, landcode, nummer) {
    const l = Buffer.from(landcode).toString("base64");
    const n = Buffer.from(nummer).toString("base64");
    const js = `this.href='tel:'+atob(this.dataset.l)+atob(this.dataset.n)`;
    return `<a href="#contact" rel="nofollow" data-l="${l}" data-n="${n}" onmouseover="${js}" onclick="${js}">${tekst}</a>`;
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    pathPrefix,
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
}
