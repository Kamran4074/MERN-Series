// ============================================
// PRACTICAL EXAMPLES: Quotes vs Curly Brackets
// ============================================

import React from 'react';

export const QuotesVsCurlyExample = () => {
  // Variables we'll use
  const userName = "John";
  const age = 25;
  const price = 100;
  const tax = 10;
  const isActive = true;
  const count = 5;

  return (
    <div style={{ padding: '2rem', background: '#1a1a1a', color: '#fff' }}>
      <h1>❌ WRONG Examples (Problems):</h1>
      
      {/* PROBLEM 1: Variable not working */}
      <div style={{ marginBottom: '2rem', border: '2px solid red', padding: '1rem' }}>
        <h2>Problem 1: Variable shows as text</h2>
        <p>Hello userName</p>
        {/* ❌ Output: "Hello userName" (literal text, not the variable value) */}
        
        <p>Age: age</p>
        {/* ❌ Output: "Age: age" (literal text) */}
      </div>

      {/* PROBLEM 2: Math not working */}
      <div style={{ marginBottom: '2rem', border: '2px solid red', padding: '1rem' }}>
        <h2>Problem 2: Math shows as text</h2>
        <p>Total: price + tax</p>
        {/* ❌ Output: "Total: price + tax" (literal text, not calculation) */}
        
        <p>Count + 1: count + 1</p>
        {/* ❌ Output: "Count + 1: count + 1" (literal text) */}
      </div>

      {/* PROBLEM 3: Number as string */}
      <div style={{ marginBottom: '2rem', border: '2px solid red', padding: '1rem' }}>
        <h2>Problem 3: Number as string (can't do math)</h2>
        <button width="400">Button with width="400"</button>
        {/* ⚠️ width is string "400", not number 400 */}
        {/* If you try: const area = width * 2;  // "400" * 2 = NaN or weird result */}
      </div>

      <hr style={{ margin: '3rem 0', border: '1px solid #555' }} />

      <h1>✅ CORRECT Examples (Fixed):</h1>
      
      {/* SOLUTION 1: Variables work */}
      <div style={{ marginBottom: '2rem', border: '2px solid green', padding: '1rem' }}>
        <h2>✅ Solution 1: Variable displays correctly</h2>
        <p>Hello {userName}</p>
        {/* ✅ Output: "Hello John" */}
        
        <p>Age: {age}</p>
        {/* ✅ Output: "Age: 25" */}
      </div>

      {/* SOLUTION 2: Math works */}
      <div style={{ marginBottom: '2rem', border: '2px solid green', padding: '1rem' }}>
        <h2>✅ Solution 2: Math calculates correctly</h2>
        <p>Total: {price + tax}</p>
        {/* ✅ Output: "Total: 110" */}
        
        <p>Count + 1: {count + 1}</p>
        {/* ✅ Output: "Count + 1: 6" */}
        
        <p>Price with discount: {(price + tax) * 0.9}</p>
        {/* ✅ Output: "Price with discount: 99" */}
      </div>

      {/* SOLUTION 3: Number as number */}
      <div style={{ marginBottom: '2rem', border: '2px solid green', padding: '1rem' }}>
        <h2>✅ Solution 3: Number is actually a number</h2>
        <button width={400} style={{ padding: '0.5rem' }}>
          Button with width={400}
        </button>
        {/* ✅ width is number 400 */}
        {/* Math works: const area = width * 2;  // 400 * 2 = 800 ✅ */}
      </div>

      {/* SOLUTION 4: Boolean */}
      <div style={{ marginBottom: '2rem', border: '2px solid green', padding: '1rem' }}>
        <h2>✅ Solution 4: Boolean works correctly</h2>
        <button disabled={isActive}>
          Button (disabled={isActive})
        </button>
        {/* ✅ Properly disabled because isActive = true */}
        
        <button disabled={false} style={{ marginLeft: '1rem' }}>
          Enabled Button (disabled={false})
        </button>
        {/* ✅ Properly enabled */}
      </div>

      {/* SOLUTION 5: Conditional */}
      <div style={{ marginBottom: '2rem', border: '2px solid green', padding: '1rem' }}>
        <h2>✅ Solution 5: Conditional expression</h2>
        <p className={isActive ? 'active' : 'inactive'}>
          Status: {isActive ? 'Active' : 'Inactive'}
        </p>
        {/* ✅ Shows "Status: Active" and applies 'active' class */}
      </div>

      <hr style={{ margin: '3rem 0', border: '1px solid #555' }} />

      <h1>📊 Side-by-Side Comparison:</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '2rem' }}>
        <thead>
          <tr style={{ background: '#333' }}>
            <th style={{ padding: '1rem', border: '1px solid #555', textAlign: 'left' }}>Type</th>
            <th style={{ padding: '1rem', border: '1px solid #555', textAlign: 'left' }}>❌ Wrong (Quotes)</th>
            <th style={{ padding: '1rem', border: '1px solid #555', textAlign: 'left' }}>✅ Correct (Curly)</th>
            <th style={{ padding: '1rem', border: '1px solid #555', textAlign: 'left' }}>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '1rem', border: '1px solid #555' }}>Number</td>
            <td style={{ padding: '1rem', border: '1px solid #555', color: '#ff6b6b' }}>
              <code>width="400"</code>
            </td>
            <td style={{ padding: '1rem', border: '1px solid #555', color: '#51cf66' }}>
              <code>width={400}</code>
            </td>
            <td style={{ padding: '1rem', border: '1px solid #555' }}>
              Quotes = string "400"<br/>
              Curly = number 400
            </td>
          </tr>
          <tr>
            <td style={{ padding: '1rem', border: '1px solid #555' }}>Variable</td>
            <td style={{ padding: '1rem', border: '1px solid #555', color: '#ff6b6b' }}>
              <code>&lt;p&gt;Hello userName&lt;/p&gt;</code>
            </td>
            <td style={{ padding: '1rem', border: '1px solid #555', color: '#51cf66' }}>
              <code>&lt;p&gt;Hello {`{userName}`}&lt;/p&gt;</code>
            </td>
            <td style={{ padding: '1rem', border: '1px solid #555' }}>
              Shows: "Hello userName"<br/>
              Shows: "Hello John" ✅
            </td>
          </tr>
          <tr>
            <td style={{ padding: '1rem', border: '1px solid #555' }}>Math</td>
            <td style={{ padding: '1rem', border: '1px solid #555', color: '#ff6b6b' }}>
              <code>&lt;p&gt;Total: price + tax&lt;/p&gt;</code>
            </td>
            <td style={{ padding: '1rem', border: '1px solid #555', color: '#51cf66' }}>
              <code>&lt;p&gt;Total: {`{price + tax}`}&lt;/p&gt;</code>
            </td>
            <td style={{ padding: '1rem', border: '1px solid #555' }}>
              Shows: "Total: price + tax"<br/>
              Shows: "Total: 110" ✅
            </td>
          </tr>
          <tr>
            <td style={{ padding: '1rem', border: '1px solid #555' }}>Boolean</td>
            <td style={{ padding: '1rem', border: '1px solid #555', color: '#ff6b6b' }}>
              <code>disabled="true"</code>
            </td>
            <td style={{ padding: '1rem', border: '1px solid #555', color: '#51cf66' }}>
              <code>disabled={true}</code>
            </td>
            <td style={{ padding: '1rem', border: '1px solid #555' }}>
              String "true" (confusing)<br/>
              Boolean true ✅
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuotesVsCurlyExample;








