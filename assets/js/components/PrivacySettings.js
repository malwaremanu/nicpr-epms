// Define component as an ES module
export default {
  template: `
    <div>
      <h2 class="text-xl font-semibold mb-4">Account Settings</h2>
      
      <div class="space-y-4">
        <div class="p-3 border-b border-gray-200 flex items-center justify-between cursor-pointer">
          <div>
            <div class="font-medium">Security</div>
            <div class="text-sm text-gray-600">Two-step verification, change password</div>
          </div>
          <span class="material-symbols-outlined text-gray-400">chevron_right</span>
        </div>
        
        <!-- Other settings items -->
      </div>
    </div>
  `
};