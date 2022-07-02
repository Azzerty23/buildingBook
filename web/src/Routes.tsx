// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import BuildingsLayout from 'src/layouts/Admin/BuildingsLayout'
import CommentsLayout from 'src/layouts/Admin/CommentsLayout'
import CompaniesLayout from 'src/layouts/Admin/CompaniesLayout'
import MaterialsLayout from 'src/layouts/Admin/MaterialsLayout'
import PostsLayout from 'src/layouts/Admin/PostsLayout'
import TasksLayout from 'src/layouts/Admin/TasksLayout'
import UsersLayout from 'src/layouts/Admin/UsersLayout'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={MainLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>
      <Set wrap={CommentsLayout}>
        <Route path="/admin/comments/new" page={AdminCommentNewCommentPage} name="adminNewComment" />
        <Route path="/admin/comments/{id:Int}/edit" page={AdminCommentEditCommentPage} name="adminEditComment" />
        <Route path="/admin/comments/{id:Int}" page={AdminCommentCommentPage} name="adminComment" />
        <Route path="/admin/comments" page={AdminCommentCommentsPage} name="adminComments" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/admin/posts/new" page={AdminPostNewPostPage} name="adminNewPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={AdminPostEditPostPage} name="adminEditPost" />
        <Route path="/admin/posts/{id:Int}" page={AdminPostPostPage} name="adminPost" />
        <Route path="/admin/posts" page={AdminPostPostsPage} name="adminPosts" />
      </Set>
      <Set wrap={MaterialsLayout}>
        <Route path="/admin/materials/new" page={AdminMaterialNewMaterialPage} name="adminNewMaterial" />
        <Route path="/admin/materials/{id:Int}/edit" page={AdminMaterialEditMaterialPage} name="adminEditMaterial" />
        <Route path="/admin/materials/{id:Int}" page={AdminMaterialMaterialPage} name="adminMaterial" />
        <Route path="/admin/materials" page={AdminMaterialMaterialsPage} name="adminMaterials" />
      </Set>
      <Set wrap={TasksLayout}>
        <Route path="/admin/tasks/new" page={AdminTaskNewTaskPage} name="adminNewTask" />
        <Route path="/admin/tasks/{id:Int}/edit" page={AdminTaskEditTaskPage} name="adminEditTask" />
        <Route path="/admin/tasks/{id:Int}" page={AdminTaskTaskPage} name="adminTask" />
        <Route path="/admin/tasks" page={AdminTaskTasksPage} name="adminTasks" />
      </Set>
      <Set wrap={BuildingsLayout}>
        <Route path="/admin/buildings/new" page={AdminBuildingNewBuildingPage} name="adminNewBuilding" />
        <Route path="/admin/buildings/{id:Int}/edit" page={AdminBuildingEditBuildingPage} name="adminEditBuilding" />
        <Route path="/admin/buildings/{id:Int}" page={AdminBuildingBuildingPage} name="adminBuilding" />
        <Route path="/admin/buildings" page={AdminBuildingBuildingsPage} name="adminBuildings" />
      </Set>
      <Set wrap={CompaniesLayout}>
        <Route path="/admin/companies/new" page={AdminCompanyNewCompanyPage} name="adminNewCompany" />
        <Route path="/admin/companies/{id:Int}/edit" page={AdminCompanyEditCompanyPage} name="adminEditCompany" />
        <Route path="/admin/companies/{id:Int}" page={AdminCompanyCompanyPage} name="adminCompany" />
        <Route path="/admin/companies" page={AdminCompanyCompaniesPage} name="adminCompanies" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/admin/users/new" page={AdminUserNewUserPage} name="adminNewUser" />
        <Route path="/admin/users/{id:Int}/edit" page={AdminUserEditUserPage} name="adminEditUser" />
        <Route path="/admin/users/{id:Int}" page={AdminUserUserPage} name="adminUser" />
        <Route path="/admin/users" page={AdminUserUsersPage} name="adminUsers" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
