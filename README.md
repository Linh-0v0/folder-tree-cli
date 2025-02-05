# Folder Tree CLI

A CLI application to manage a folder tree structure using Node.js.

## Features
- Add/remove files and folders.
- Search for files and folders by name.
- Display the folder structure as a tree.

## Edge Cases to Handle
1. **Adding a file to a non-existent folder:**
    - The program will throw an error and notify the user that the folder doesn't exist.

2. **Adding a folder to a non-existent parent folder:**
    - Similar to the above, if the user tries to add a subfolder to a folder that doesn't exist, the program will notify the user.

3. **Removing a non-existent file or folder:**
    - If the user tries to remove a file or folder that doesn't exist, the program will notify the user.

4. **Searching for a non-existent file or folder:**
    - If the user searches for a file or folder that doesn't exist, the program will return a clear message.

5. **Handling invalid commands:**
    - If the user enters an invalid command, the program will return `Invalid command`.

## Setup
1. Clone the repository:
   `git clone https://github.com/your-username/folder-tree-cli.git`
2. Navigate to the project directory:
    `cd folder-tree-cli`
3. Run the application:
    `node index.js`

## Commands
- `addFile <folderPath> <fileName> <content>` - Add a file.
- `removeFile <folderPath> <fileName>` - Remove a file.
- `addFolder <folderPath> <folderName>` - Add a folder.
- `removeFolder <folderPath> <folderName>` - Remove a folder.
- `searchFile <folderPath> <fileName>` - Search for a file.
- `searchFolder <folderPath> <folderName>` - Search for a folder.
- `viewFile <folderPath> <fileName>` - View file content.
- `display` - Show folder structure.
- `exit` - Exit the CLI.


## Examples
1. **Add a folder structure:**
```
addFolder root folder1
addFolder root/folder1 folder2
```

2. **Add files to the folders:**
```
addFile root file1.txt This is file 1
addFile root/folder1 file2.txt This is file 2
addFile root/folder1/folder2 file3.txt This is file 3
```

3. **Search for files and folders:**
```
searchFile root file1.txt
searchFile root/folder1 file2.txt
searchFolder root folder1
searchFolder root/folder1 folder2
```

4. **Remove:**
```
removeFile root file1.txt
removeFolder root/folder1 folder2
```

5. **Display**
```
display
viewFile root file1.txt
```