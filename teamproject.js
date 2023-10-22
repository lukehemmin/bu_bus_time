function showTable() {
    // select element 가져오기
    const selectElement = document.getElementById('location-select');
  
    // select element에서 선택된 option의 value 가져오기
    const selectedValue = selectElement.value;
  
    // table1과 table2 숨기기
    const table1Element = document.getElementById('table1');
    const table2Element = document.getElementById('table2');
    const table3Element = document.getElementById('table3');
    const table4Element = document.getElementById('table4');
    const table5Element = document.getElementById('table5');
    const table6Element = document.getElementById('table6');
    const table7Element = document.getElementById('table7');
    const table8Element = document.getElementById('table8');
    const table9Element = document.getElementById('table9');
    const table10Element = document.getElementById('table10');
    const table11Element = document.getElementById('table11');
    const table12Element = document.getElementById('table12');
    const table13Element = document.getElementById('table13');
    table1Element.style.display = 'none';
    table2Element.style.display = 'none';
    table3Element.style.display = 'none';
    table4Element.style.display = 'none';
    table5Element.style.display = 'none';
    table6Element.style.display = 'none';
    table7Element.style.display = 'none';
    table8Element.style.display = 'none';
    table9Element.style.display = 'none';
    table10Element.style.display = 'none';
    table11Element.style.display = 'none';
    table12Element.style.display = 'none';
    table13Element.style.display = 'none';
  
    // 선택된 value를 이용하여 해당하는 table 보여주기
    const tableElement = document.getElementById(selectedValue);
    tableElement.style.display = 'table';
  }