// 1. Event Propagation : it is the process in which the element is propagated from one element to the another element and there are two ways to do that
// Event bubbling and Event Capturing

// 2. Event bubbling is the process in which the event is propagated from innermost element to the outermost element means event is first triggered the innermost element and than the outermost element

(<body>
  <div id="outerparent">
  <div id="innerparent">
    <button id="button">Click Me</button>
  </div>
</div>
  
  <script>
    document.getElementById("outerparent").addEventListener('click',()=>{
      console.log("outer clicked");
    });
    
    document.getElementById("innerparent").addEventListener('click',()=>{
      console.log("inner clicked");
    });
    
    document.getElementById("button").addEventListener('click',()=>{
      console.log("button clicked");
    });
  </script>
</body>)
// Here first button clicked runs first than inner clicked and than outer clicked



// 3. Event capturing is the process in which the even is propagated from outermost element to the innermost element means even is first triggered the outermost element and than the innermost element
(<body>
  <div id="outerparent">
  <div id="innerparent">
    <button id="button">Click Me</button>
  </div>
</div>
  
  <script>
    document.getElementById("outerparent").addEventListener('click',()=>{
      console.log("outer clicked");
    },true);
    
    document.getElementById("innerparent").addEventListener('click',()=>{
      console.log("inner clicked");
    },true);
    
    document.getElementById("button").addEventListener('click',()=>{
      console.log("button clicked");
    },true);
  </script>
</body>)
// Here first outer clicked runs first than inner clicked and than button clicked 


// 4. Event delegation is a technique in which we added even listener to the parent element instead of multiple child element because at the end all event will bubbled up towards the top of the element
(<body>
    <ul id="list">
      <li>laptop</li>
      <li>desktop</li>
      <li>shoes</li>
    </ul>

    <script>
      document.getElementById("list").addEventListener("click", (e) => {
        console.log(e.target.innerText);
        window.location.href = "/" + e.target.innerText;
      });
    </script>
  </body>)
// here we have not to add event listener to the each li tag because at the end all listener will bubbled up toward the parent element so only event listener added to the parent only

// limitation : there are some events which are not bubbled up like focus, blur, window resize etc.