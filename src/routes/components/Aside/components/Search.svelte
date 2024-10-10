<div class="search-container">
  <input class="search-input" />
  <button class="search-button" aria-label="search">
    <i data-feather="search" class="search-button-icon"></i>
  </button>
</div>

<style>
  .search-container {
    width: 100%;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .search-input {
    height: 100%;
    padding: 0;
    flex-grow: 1;
    background-color: #f4f4f4;
    box-shadow: inset 0em 0em 0.8em #dadada;
    border: none;
  }
  .search-button {
    width: 48px;
    height: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgb(208, 218, 61);
    border: none;
    border-top: 4px solid #292929;
  }
  .search-button-icon {
    width: 18px;
    height: 18px;
    stroke-width: 3;
    color: #292929;
  }
</style>