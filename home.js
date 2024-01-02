
  const data = [
    { Organization: 'Bank of America', Code:'SFAW' , Handler: 'Savannah Nguyen' },
    { Organization: 'Google', Code: 'GSLK', Handler: 'Michael Johnson'},
    { Organization: 'Apple inc.', Code: 'APLQ', Handler: 'Emily Roberts'},
    { Organization: 'Microsoft', Code: 'MSFT', Handler: 'David Thompson'},
    { Organization: 'Amazon', Code: 'AMZN', Handler: 'Jessica Anderson'},
    { Organization: 'Facebook', Code: 'FBKL', Handler: 'Christopher Davis'},
    { Organization: 'Tesla', Code: 'TSLA', Handler: 'Olivia Wilson'},
    { Organization: 'Netflix', Code: 'NFLX', Handler: 'William Martinez'},
    { Organization: 'IBM', Code: 'IBMQ', Handler: 'Sophia Lee'},
    { Organization: 'Intel', Code: 'INTC', Handler: 'Daniel Hernandez'},
    { Organization: 'Salesforce', Code: 'SFCR', Handler: 'Benjamin Anderson'},
    { Organization: 'HP Inc.', Code: 'HPIN', Handler: 'Evelyn Davis'},
    { Organization: 'Toshiba', Code: 'TSHB', Handler: 'Mike Hanson'},
    
  ];

  const itemsPerPage = 6; // Adjust the number of items per page as needed
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let currentPage = 1;

  const tbody = document.querySelector('#dataTable tbody');
  const searchInput = document.getElementById('searchInput');
  const paginationContainer = document.getElementById('pagination');

  // Function to filter data based on search input
  function filterData() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = data.filter(person => person.Organization.toLowerCase().includes(searchTerm));

    // Clear the table body
    tbody.innerHTML = '';

    // Populate the table with filtered data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);

    currentItems.forEach(person => {
      const row = document.createElement('tr');
      row.innerHTML = `<td><input type="checkbox" id="checkbox_id"></td><td>${person.Organization}</td><td>${person.Code}</td><td>${person.Handler}</td>`;
      tbody.appendChild(row);
    });

    // Update pagination
    updatePagination(filteredData.length);
  }

  // Function to update pagination
  function updatePagination(totalItems) {
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.textContent = i;
      li.addEventListener('click', () => {
        currentPage = i;
        filterData();
      });

      if (i === currentPage) {
        li.classList.add('current');
      }

      paginationContainer.appendChild(li);
    }
  }

  // Initial table population and pagination update
  filterData();

  // Event listener for input changes
  searchInput.addEventListener('input', filterData);

 