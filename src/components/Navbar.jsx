const links = [
  { id: "hero", label: "首页" },
  { id: "mirror", label: "镜像" },
  { id: "history", label: "时代之镜" },
  { id: "theory", label: "理论之镜" },
  { id: "storm", label: "标签风暴" },
  { id: "archive", label: "案例档案" },
  { id: "reflection", label: "最后的镜子" },
  { id: "references", label: "参考文献" }
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header-inner shell">
        <div className="brand-block">
          <span className="brand-kicker">Psychology Course Project</span>
          <strong>Who Defines You?</strong>
        </div>
        <nav className="nav-pills" aria-label="页面导航">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
