export default [
  // Beginner Level (15 questions)
  {
    id: 'q1',
    text: 'Which of the following definitions best describes React.js?',
    answers: [
      'A library to build user interfaces with help of declarative code.',
      'A library for managing state in web applications.',
      'A framework to build user interfaces with help of imperative code.',
      'A library used for building mobile applications only.',
    ],
  },
  {
    id: 'q2',
    text: 'What purpose do React hooks serve?',
    answers: [
      'Enabling the use of state and other React features in functional components.',
      'Creating responsive layouts in React applications.',
      'Handling errors within the application.',
      'Part of the Redux library for managing global state.',
    ],
  },
  {
    id: 'q3',
    text: 'Can you identify what JSX is?',
    answers: [
      'A JavaScript extension that adds HTML-like syntax to JavaScript.',
      'A JavaScript library for building dynamic user interfaces.',
      'A specific HTML version that was explicitly created for React.',
      'A tool for making HTTP requests in a React application.',
    ],
  },
  {
    id: 'q4',
    text: 'What is the most common way to create a component in React?',
    answers: [
      'By defining a JavaScript function that returns a renderable value.',
      'By defining a custom HTML tag in JavaScript.',
      'By creating a file with a .jsx extension.',
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: 'q5',
    text: 'What does the term "React state" imply?',
    answers: [
      'An object in a component that holds values and may cause the component to render on change.',
      'The lifecycle phase a React component is in.',
      'The overall status of a React application, including all props and components.',
      'A library for managing global state in React applications.',
    ],
  },
  {
    id: 'q6',
    text: 'How do you typically render list content in React apps?',
    answers: [
      'By using the map() method to iterate over an array of data and returning JSX.',
      'By using the for() loop to iterate over an array of data and returning JSX.',
      'By using the forEach() method to iterate over an array of data and returning JSX.',
      'By using the loop() method to iterate over an array of data and returning JSX.',
    ],
  },
  {
    id: 'q7',
    text: 'Which approach can NOT be used to render content conditionally?',
    answers: [
      'Using a the #if template syntax.',
      'Using a ternary operator.',
      'Using the && operator.',
      'Using an if-else statement.',
    ],
  },
  {
    id: 'q8',
    text: 'What does “props” stand for in React?',
    answers: [
      'Properties passed to components to control behavior or display.',
      'A variable used for component state.',
      'A way to style components.',
      'A lifecycle method in React.',
    ],
  },
  {
    id: 'q9',
    text: 'What does "ReactDOM.render" do in a React application?',
    answers: [
      'Renders a React element into the DOM.',
      'Creates a new React component.',
      'Updates the state of a component.',
      'Defines the initial value for a component’s state.',
    ],
  },
  {
    id: 'q10',
    text: 'In which of the following cases should you use React.Fragment?',
    answers: [
      'To group multiple elements without adding an extra node to the DOM.',
      'To use component-level state.',
      'To define inline styles for a component.',
      'To handle events within a component.',
    ],
  },
  {
    id: 'q11',
    text: 'What is the correct syntax to create a React functional component?',
    answers: [
      'function ComponentName() { return <div>Hello</div>; }',
      'new ComponentName() { return <div>Hello</div>; }',
      'ComponentName extends React.Component { return <div>Hello</div>; }',
      'const ComponentName = new React.Component();',
    ],
  },
  {
    id: 'q12',
    text: 'How do you pass data to child components in React?',
    answers: [
      'Using props.',
      'Using the state object.',
      'Using global variables.',
      'By setting component styles.',
    ],
  },
  {
    id: 'q13',
    text: 'Which hook would you use to manage component state in a functional component?',
    answers: [
      'useState',
      'useEffect',
      'useReducer',
      'useCallback',
    ],
  },
  {
    id: 'q14',
    text: 'What does "lifting state up" mean in React?',
    answers: [
      'Moving state to a common ancestor component.',
      'Storing state in the global scope.',
      'Passing state between sibling components.',
      'Using the useEffect hook to manage state.',
    ],
  },
  {
    id: 'q15',
    text: 'Which of these is NOT a React lifecycle method?',
    answers: [
      'startRendering',
      'componentDidMount',
      'componentWillUnmount',
      'shouldComponentUpdate',
    ],
  },

  // Intermediate Level (15 questions)
  {
    id: 'q16',
    text: 'What does the useEffect hook allow you to do?',
    answers: [
      'Run side effects in functional components.',
      'Update state within functional components.',
      'Handle component unmounting.',
      'Return JSX directly.',
    ],
  },
  {
    id: 'q17',
    text: 'What is "React Router" used for?',
    answers: [
      'Handling routing in React applications.',
      'Managing component state.',
      'Creating CSS animations.',
      'Fetching data from APIs.',
    ],
  },
  {
    id: 'q18',
    text: 'What is Context API primarily used for?',
    answers: [
      'Managing global state that can be accessed by any component.',
      'Handling API requests.',
      'Implementing lifecycle methods in functional components.',
      'Rendering lists efficiently.',
    ],
  },
  {
    id: 'q16',
    text: 'What does the useEffect hook allow you to do?',
    answers: [
      'Run side effects in functional components.',
      'Update state within functional components.',
      'Handle component unmounting.',
      'Return JSX directly.',
    ],
  },
  {
    id: 'q17',
    text: 'What is "React Router" used for?',
    answers: [
      'Handling routing in React applications.',
      'Managing component state.',
      'Creating CSS animations.',
      'Fetching data from APIs.',
    ],
  },
  {
    id: 'q18',
    text: 'What is Context API primarily used for?',
    answers: [
      'Managing global state that can be accessed by any component.',
      'Handling API requests.',
      'Implementing lifecycle methods in functional components.',
      'Rendering lists efficiently.',
    ],
  },
  {
    id: 'q19',
    text: 'How can you prevent unnecessary re-renders in functional components?',
    answers: [
      'Using React.memo to memoize components.',
      'Using the useEffect hook with an empty dependency array.',
      'Calling setState only within the render method.',
      'Using the shouldUpdate hook.',
    ],
  },
  {
    id: 'q20',
    text: 'What is a key requirement when rendering a list of elements in React?',
    answers: [
      'Providing a unique key prop for each element.',
      'Using a new array for each render.',
      'Using the index of the array as the key.',
      'Setting the state for each item in the list.',
    ],
  },
  {
    id: 'q21',
    text: 'What does the useRef hook provide in React?',
    answers: [
      'Access to a mutable object that persists across renders.',
      'Access to the component’s current state.',
      'A way to update the DOM directly.',
      'A function for running side effects.',
    ],
  },
  {
    id: 'q22',
    text: 'How can you optimize a large list in React to improve performance?',
    answers: [
      'Using windowing with libraries like react-window or react-virtualized.',
      'Rendering the entire list at once to reduce load times.',
      'Implementing a for loop for list iteration.',
      'Using the setInterval method to delay each render.',
    ],
  },
  {
    id: 'q23',
    text: 'What does prop drilling refer to in React?',
    answers: [
      'Passing props through multiple levels of components unnecessarily.',
      'Using props to manage global state.',
      'Sending props to the Redux store.',
      'Setting props in class-based components only.',
    ],
  },
  {
    id: 'q24',
    text: 'Which hook would you use to implement context in functional components?',
    answers: [
      'useContext',
      'useRef',
      'useReducer',
      'useLayoutEffect',
    ],
  },
  {
    id: 'q25',
    text: 'What does the useReducer hook allow you to do in React?',
    answers: [
      'Manage more complex state logic compared to useState.',
      'Add side effects to functional components.',
      'Access the DOM element directly.',
      'Subscribe to context changes.',
    ],
  },
  {
    id: 'q26',
    text: 'What is the purpose of the useCallback hook?',
    answers: [
      'Memoize functions to prevent unnecessary re-creations.',
      'Manage side effects in functional components.',
      'Access the previous state in the next render.',
      'Render components conditionally.',
    ],
  },
  {
    id: 'q27',
    text: 'In React, what does lazy loading allow you to do?',
    answers: [
      'Load components only when they are needed to reduce initial load time.',
      'Preload components before they are rendered.',
      'Create asynchronous components.',
      'Render components immediately on page load.',
    ],
  },
  {
    id: 'q28',
    text: 'What is the purpose of the React Profiler API?',
    answers: [
      'Measure the performance of React applications.',
      'Create custom hooks in React applications.',
      'Add logging for React component errors.',
      'Handle network requests in React applications.',
    ],
  },
  {
    id: 'q29',
    text: 'What is an error boundary in React?',
    answers: [
      'A component that catches JavaScript errors in child components.',
      'A function that handles errors within a hook.',
      'A feature of the Context API to manage errors.',
      'A lifecycle method used to detect errors in functional components.',
    ],
  },
  {
    id: 'q30',
    text: 'What does the useLayoutEffect hook do differently compared to useEffect?',
    answers: [
      'It runs synchronously after all DOM mutations.',
      'It only runs on the initial render of the component.',
      'It can be used only in class-based components.',
      'It’s used specifically for API calls.',
    ],
  },
  {
    id: 'q31',
    text: 'What is the purpose of the useImperativeHandle hook in React?',
    answers: [
      'Customize the instance value that is exposed to parent components when using refs.',
      'Track component updates for optimization purposes.',
      'Manage complex state changes in functional components.',
      'Create side effects in functional components.',
    ],
  },
  {
    id: 'q32',
    text: 'How does React’s concurrent mode improve user experience?',
    answers: [
      'By allowing React to work on multiple tasks at the same time, improving perceived responsiveness.',
      'By enabling synchronous rendering for faster updates.',
      'By making API calls more efficient in React.',
      'By automatically caching components and reducing memory usage.',
    ],
  },
  {
    id: 'q33',
    text: 'What is React Suspense used for?',
    answers: [
      'To handle the loading states of asynchronous components.',
      'To delay component updates until certain conditions are met.',
      'To manage errors in asynchronous operations.',
      'To prevent component re-renders in certain states.',
    ],
  },
  {
    id: 'q34',
    text: 'Which of these is a common use case for React’s useMemo hook?',
    answers: [
      'Optimizing performance by memoizing expensive calculations.',
      'Preventing state updates in child components.',
      'Managing complex state updates in nested components.',
      'Handling component side effects.',
    ],
  },
  {
    id: 'q35',
    text: 'What does the "hydrate" method do in React?',
    answers: [
      'It attaches event listeners to HTML that was rendered by the server.',
      'It clears memory cache for components in a React application.',
      'It fetches data required for server-side rendering.',
      'It creates an initial state for hydration components.',
    ],
  },
  {
    id: 'q36',
    text: 'Why is code-splitting beneficial in React applications?',
    answers: [
      'It reduces initial load time by splitting code into smaller bundles.',
      'It caches all components to avoid re-rendering.',
      'It simplifies state management across components.',
      'It allows synchronous loading of assets.',
    ],
  },
  {
    id: 'q37',
    text: 'In server-side rendering (SSR) with React, which library is commonly used to enable it?',
    answers: [
      'Next.js',
      'Redux',
      'React Router',
      'React Bootstrap',
    ],
  },
  {
    id: 'q38',
    text: 'How does React’s useTransition hook help with concurrent UI updates?',
    answers: [
      'It allows marking state updates as non-urgent, preventing UI blocking.',
      'It enables direct DOM manipulation within functional components.',
      'It creates synchronous state updates.',
      'It triggers suspense boundaries conditionally.',
    ],
  },
  {
    id: 'q39',
    text: 'What is the purpose of React’s error boundaries?',
    answers: [
      'To catch JavaScript errors anywhere in the component tree below them.',
      'To enforce strict data types in props.',
      'To prevent state updates in case of an error.',
      'To provide additional lifecycle methods for error management.',
    ],
  },
  {
    id: 'q40',
    text: 'What does the getDerivedStateFromError lifecycle method do in React?',
    answers: [
      'Allows setting state when an error is caught in a descendant component.',
      'Automatically unmounts components when an error occurs.',
      'Restores the previous state after a component error.',
      'Provides asynchronous error handling within functional components.',
    ],
  },
  {
    id: 'q41',
    text: 'What does the createPortal function allow you to do in React?',
    answers: [
      'Render children into a DOM node outside of the parent component hierarchy.',
      'Reuse state between components without using Context.',
      'Use server-rendered components on the client side.',
      'Manage global state across multiple React applications.',
    ],
  },
  {
    id: 'q42',
    text: 'How does React handle synthetic events?',
    answers: [
      'React creates a synthetic event wrapper around native events to ensure cross-browser compatibility.',
      'React uses native events directly without modifications.',
      'React queues events for batch processing.',
      'React uses asynchronous events only to improve performance.',
    ],
  },
  {
    id: 'q43',
    text: 'What is the use of the forwardRef function in React?',
    answers: [
      'It allows passing refs to child components.',
      'It creates a new context for props.',
      'It manages global state across multiple React applications.',
      'It enables conditional rendering of components.',
    ],
  },
  {
    id: 'q44',
    text: 'How does React’s Profiler API help optimize performance?',
    answers: [
      'It measures rendering times for components to identify performance bottlenecks.',
      'It provides detailed memory usage statistics for components.',
      'It automatically clears unused state and props.',
      'It manages asynchronous requests within components.',
    ],
  },
  {
    id: 'q45',
    text: 'What is the main purpose of React’s PureComponent?',
    answers: [
      'To optimize performance by implementing a shallow comparison on props and state.',
      'To enforce strict prop types in components.',
      'To create server-rendered components in React.',
      'To prevent error boundaries from being triggered.',
    ],
  },
  {
    id: 'q46',
    text: 'What does shallow rendering mean in React testing?',
    answers: [
      'Rendering only the component itself, without its child components.',
      'Rendering the entire component tree to test for bugs.',
      'Testing asynchronous requests in components.',
      'Rendering server-side code within React.',
    ],
  },
  {
    id: 'q47',
    text: 'How can you batch multiple state updates in React?',
    answers: [
      'Using React’s startTransition API or automatic batching in event handlers.',
      'Using the useMemo hook to group updates.',
      'Using setTimeout to delay updates.',
      'Using the getDerivedStateFromProps lifecycle method.',
    ],
  },
  {
    id: 'q48',
    text: 'What does the useDeferredValue hook achieve in React?',
    answers: [
      'It defers updating a value until it’s convenient, optimizing rendering for high-priority updates.',
      'It prevents state updates from triggering re-renders.',
      'It caches values to avoid re-fetching.',
      'It allows background processing of component data.',
    ],
  },
  {
    id: 'q49',
    text: 'How does the StrictMode component in React assist with debugging?',
    answers: [
      'It identifies potential problems by highlighting unsafe lifecycles and other issues in development mode.',
      'It automatically fixes syntax errors in components.',
      'It allows only synchronous updates for debugging.',
      'It prevents components from re-rendering.',
    ],
  },
  {
    id: 'q50',
    text: 'What is the main advantage of using React.lazy for component loading?',
    answers: [
      'It enables dynamic importing, allowing components to load only when needed.',
      'It caches components across all instances.',
      'It allows synchronous component updates for faster response.',
      'It improves compatibility with server-side rendering.',
    ],
  },
];

