import fs from "node:fs";

// Op GitHub Pages zonder eigen domein staat de site onder /broesdoes/.
// De workflow zet PATH_PREFIX; lokaal en met eigen domein blijft het "/".
const pathPrefix = process.env.PATH_PREFIX || "/";

export default function (eleventyConfig) {
  // Bestanden die ongewijzigd naar de uitvoermap gaan
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });
  if (fs.existsSync("src/js")) eleventyConfig.addPassthroughCopy({ "src/js": "js" });

  // Zo blijven de bestaande "layout: default" in je pagina's (en in Pages CMS) werken
  eleventyConfig.addLayoutAlias("default", "default.html");
  eleventyConfig.addLayoutAlias("home", "home.html");
  eleventyConfig.addLayoutAlias("project", "project.html");
  eleventyConfig.addLayoutAlias("contact-layout", "contact-layout.html");

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    pathPrefix,
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
}
  // Versleutelt e-mailadressen automatisch naar HTML-entities tijdens de build
  eleventyConfig.addTransform("obfuscate-emails", function(content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      return content.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, (email) => {
        return email.split('').map(char => `&#${char.charCodeAt(0)};`).join('');
      });
    }
    return content;
  });
