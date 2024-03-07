# Key Points:

- handleSearch Function: It's defined outside of useEffect, which makes it accessible both for useEffect to call it on component mount and for the button's onClick event handler to invoke it when clicked.
- useEffect Hook: It's used here to call handleSearch right after the component's first render, fetching a joke automatically without the need for user interaction. The empty dependency array [] ensures that this effect runs only once, equivalent to the component mounting phase.
- Functionality: With this setup, you get an initial joke loaded when the app starts, and you can also fetch new jokes every time you click the button. This approach provides a good balance between automatic data fetching and interactive, on-demand data fetching.





