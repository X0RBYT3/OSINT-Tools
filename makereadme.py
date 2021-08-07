import json

with open('resources.json', 'r') as f:
    resources = json.load(f)
resource_strings = []

for resource in resources:
    resource_strings.append('## [{name}]({link})\n\n#### {desc}\n\n- Tags: {tags}\n\n---'.format(**resource))


README_text = """<p align="center">
  <img
      length=200
      height=200
       src=https://raw.githubusercontent.com/gist/Nekurone/016ecbad6fafba05bd5d7e5bc223907a/raw/80a7517ad5d1b16c32fba13599040855d0c27e39/pig.svg>
</p>
<h1 align="center" >PIG: A website to find online OSINT tools</h1>
<p align="center"><a href="https://forthebadge.com" target="_blank"><img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Build with <3" /></a>&nbsp;<a href="https://forthebadge.com" target="_blank"><img src="https://forthebadge.com/images/badges/powered-by-coffee.svg"/></p>
<p align="center">
<a href="http://makeapullrequest.com" target="_blank"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields"/></a>&nbsp;
<a href="Website shields.io" target="_blank"><img src="https://img.shields.io/website-up-down-green-red/https/lbesson.bitbucket.io.svg"></a>
</p>

<!-- TOC -->
<div align="center"><a name="menu"></a>
  <h4>
    <a href="https://github.com/Nekurone/PIG-Tools#Features">
      Key Features
    </a>
    <span>  |  </span>
    <a href="https://github.com/Nekurone/PIG-Tools#Demo">
      Demo
    </a>
    <span>  |  </span>
    <a href="https://github.com/Nekurone/PIG-Tools#Contributing">
      Contributing
    </a>
  </h4>
</div>
<a name="Features"></a>
<h2 align="center">Key Features:</h2>

- Extensive and Up to date list of OSINT tools
- Autocomplete searches for keywords and names
- DuckDuckGo search engine included

  <a name="Demo"></a>
<h2 align="center">Demo</h2>

  Soon:tm:
<a name="Contributing"></a>
<h2 align="center">Contributing</h2>

So Ye wish to contribute eh? Pop open [the issues tab](https://github.com/Nekurone/PIG-Tools/issues) to take a look. If there's an open `new tool` suggestion, these get added into the tools.json file following this format:
```json
{
  "name" : "A short sweet name",
  "link" : "https://linktosite.com",
  "desc" : "A short description of what it does",
  "tags" : [
            "tags",
            "for",
            "searching",
            "keywords"
            ]
}
```

Why not take a look at [our list of contributors](https://github.com/Nekurone/PIG-Tools/graphs/contributors), We're sure you'd look good up there too :)

< a name="The List"></a>
<h2 align="center">The List</h2>


""" + '\n'.join(resource_strings)

with open('README.md', 'w') as f:
        f.write(README_text)
        f.close()
