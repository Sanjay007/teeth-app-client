export default letter => {
  const charCode = letter.charCodeAt()

  if (charCode >= 65 && charCode <= 69 || charCode >= 1040 && charCode <= 1047) {
    return {
      backgroundColor: '#dad5f8',
      color: '#816cff'
    }
  }

  if (charCode >= 70 && charCode <= 74 || charCode >= 1048 && charCode <= 1055) {
    return {
      backgroundColor: '#e9f5ff',
      color: '#2a86ff'
    }
  }

  if (charCode >= 75 && charCode <= 79 || charCode >= 1056 && charCode <= 1063) {
    return {
      backgroundColor: '#f5d6d9',
      color: '#f38181'
    }
  }

  if (charCode >= 80 && charCode <= 84 || charCode >= 1064 && charCode <= 1071) {
    return {
      backgroundColor: '#f8ecd5',
      color: '#f1a32f'
    }
  }

  if (charCode >= 85 && charCode <= 90) {
    return {
      backgroundColor: '#dad5f8',
      color: '#816cff'
    }
  }

  return {
    backgroundColor: '#e9f5ff',
    color: '#2a86ff'
  }
}