import './App.css';
function App() {
  return (
    <>
    <fieldset>fieldset标签</fieldset>

    <abbr title="abbr">HTML</abbr>
    <span> <code>abbr</code>  标签：表示一个缩写词或首字母缩略词。</span>
    <address>
    <a href="mailto:jim@example.com">jim@example.com</a><br />
    <a href="tel:+14155550132">+1 (415) 555‑0132</a>
    </address>
    <span> <code>address</code>  标签：表示一个地址。</span>
    <article>水电费撒打发斯蒂芬撒旦法</article>


    <article>
  <p>
    迪斯尼电影<cite>海的女儿</cite>（<cite>The Little Mermaid</cite>）于 1989
    年首次登上银幕。
  </p>
  <aside>在首次发行期间，该片便收获了 8700 万美元的票房。</aside>
  <p>更多有关该电影的信息…</p>
</article>
<b>撒打发斯蒂芬</b>
    
    <div>
      <p>用户列表：</p>
      <ul>
        <li>用户 1: <bdi>李明</bdi> - 中文名</li>
        <li>用户 2: <bdi>John Smith</bdi> - 英文名</li>
        <li>用户 3: <bdi>إيان</bdi> - 阿拉伯文名（从右到左）</li>
      </ul>
    </div>
    <span><code>bdi</code> 标签：双向隔离元素，用于隔离可能以不同方向呈现的文本（如阿拉伯文、希伯来文等从右到左的文本），确保周围文本的方向不受其影响。</span>
    
    <div>
      <p>bdo 标签演示：</p>
      <p>正常文本方向: 你好，世界！Hello, world!</p>
      <p>使用 bdo 从右到左 (rtl): <bdo dir="rtl">你好，世界！Hello, world!</bdo></p>
      <p>使用 bdo 从左到右 (ltr): <bdo dir="ltr"></bdo></p>
    </div>
    <span><code>bdo</code> 标签：双向重写元素，用于明确设置文本的方向，不考虑周围文本的方向。通过 dir 属性指定文本方向 (rtl: 从右到左，ltr: 从左到右)。</span>
    
    <div>
      <p>blockquote 标签演示：</p>
      <blockquote cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
        <p>
          HTML blockquote 元素（或者 HTML 块级引用元素），代表其中的文字是引用内容。
          通常在渲染时，这部分的内容会有一定的缩进。若引文来源于网络，则可以将原内容的出处 URL 
          地址设置到 cite 特性上，若要以文本的形式告知读者引文的出处时，可以通过 cite 元素。
        </p>
      </blockquote>
      <p>— 引用自 <cite>MDN Web 文档</cite></p>
    </div>
    <span><code>blockquote</code> 标签：块引用元素，用于标识从其他来源引用的文本块。常用于引用长文本，浏览器通常会对其应用缩进样式。可以通过 cite 属性指定引用来源的 URL。</span>
    
    <div>
      <p>caption 标签演示：</p>
      <table>
        <caption>公司季度业绩</caption>
        <thead>
          <tr>
            <th>季度</th>
            <th>收入 (万元)</th>
            <th>利润 (万元)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td>150</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td>180</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </div>
    <span><code>caption</code> 标签：表格标题元素，用于为表格提供标题或解释说明。通常显示在表格顶部，作为表格的第一个子元素使用，且必须直接放在 table 标签之后。</span>
    
    <div>
      <p>cite 标签演示：</p>
      <p>
        在论文《<cite>数据科学的未来趋势</cite>》中，作者提出了关于人工智能发展的新观点。
      </p>
      <p>
        我最喜欢的书是<cite>三体</cite>，作者是刘慈欣。
      </p>
    </div>
    <span><code>cite</code> 标签：用于标记作品（如书籍、论文、电影、歌曲、绘画等）的标题。浏览器通常会以斜体显示 cite 元素中的文本。不应用于标记人名，应该用于引用创意作品。</span>

    <code>push()</code>
    
    <div>
      <p>data 标签演示：</p>
      <p>
        产品列表：
        <ul>
          <li><data value="398">基础款T恤</data> - ¥39.80</li>
          <li><data value="1250">牛仔外套</data> - ¥125.00</li>
          <li><data value="799">休闲长裤</data> - ¥79.90</li>
        </ul>
      </p>
      <p>
        尺码对照表：
        <data value="S">小码（S）：适合胸围 86-94 cm</data><br />
        <data value="M">中码（M）：适合胸围 94-102 cm</data><br />
        <data value="L">大码（L）：适合胸围 102-110 cm</data>
      </p>
    </div>
    <span><code>data</code> 标签：用于将一个机器可读的值与人类可读的内容关联起来。value 属性包含机器可读的数据值，而元素内容则是人类可读的表示形式。适用于存储产品ID、数据库键值等。</span>
    
    <div>
      <p>datalist 标签演示：</p>
      <form>
        <label htmlFor="browser">选择您喜欢的浏览器：</label>
        <input list="browsers" id="browser" name="browser" />
        <datalist id="browsers">
          <option value="Chrome" />
          <option value="Firefox" />
          <option value="Safari" />
          <option value="Edge" />
          <option value="Opera" />
        </datalist>
        
        <br /><br />
        
        <label htmlFor="color">选择颜色：</label>
        <input type="text" list="colors" id="color" name="color" />
        <datalist id="colors">
          <option value="红色" />
          <option value="蓝色" />
          <option value="绿色" />
          <option value="黄色" />
          <option value="紫色" />
        </datalist>
      </form>
    </div>
    <span><code>datalist</code> 标签：提供输入字段的预定义选项列表。与 input 元素配合使用，通过 input 的 list 属性和 datalist 的 id 属性建立关联。datalist 为用户提供自动完成建议，同时允许自由输入其他值。</span>
    </>
  );
}

export default App;
