
class ChronoRange {

  constructor(text) {

    const {parseDate} = require("chrono-node");

    text = text.replace(/^\s*|\s*$/g, "");

    this.before         = null;
    this.beforeExcluded = false;
    this.after          = null;
    this.afterExcluded  = false;

    const parse = (text, key) => {

      const matches = text.match(/^(.*)(\-|\s+excluded)$/);

      if (matches) {
        this[key + "Excluded"] = true;
        text = matches[1];
      }

      this[key] = parseDate(text);

      if (this[key]=== null)
        throw new Error(`Invalid "${key}" value`);
    };

    let matches;

    matches = text.match(/^between\s+(.+)\s+and\s+(.+)$/ui);

    if (matches) {

      parse(matches[1], "after");
      parse(matches[2], "before");

      if (this.before < this.after) {
        [this.after, this.before]                 = [this.before, this.after];
        [this.afterExcluded, this.beforeExcluded] = [this.beforeExcluded, this.afterExcluded];
      }

      return;
    }

    matches = text.match(/^before\s+(.+)$/ui);

    if (matches) {
      parse(matches[1], "before");
      return;
    }

    matches = text.match(/^after\s+(.+)$/ui);

    if (matches) {
      parse(matches[1], "after");
      return;
    }

    throw new Error(`Invalid range: ${text}`);
  }

  check(date) {

    if (this.after && (this.afterExcluded ? date <= this.after : date < this.after))
      return false;

    if (this.before && (this.beforeExcluded ? date >= this.before : date > this.before))
      return false;

    return true;
  }

  checkFile(file, field = "mtime") {

    if (!["atime", "mtime", "ctime", "birthtime"].includes(field))
      throw new Error(`Invalid field: ${field}`);

    return this.check(require("fs").statSync(file)[field]);
  }
}

module.exports = text => new ChronoRange(text);
