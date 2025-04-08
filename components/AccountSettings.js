// File: components/AccountSettings.js
export default {
    props: ['data'],
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

                  <div class="p-3 border-b border-gray-200 flex items-center justify-between cursor-pointer">
                      <div>
                          <div class="font-medium">Change Number</div>
                          <div class="text-sm text-gray-600">Transfer chats to new number</div>
                      </div>
                      <span class="material-symbols-outlined text-gray-400">chevron_right</span>
                  </div>

                  <div class="p-3 border-b border-gray-200 flex items-center justify-between cursor-pointer">
                      <div>
                          <div class="font-medium">Account Information</div>
                          <div class="text-sm text-gray-600">View your account details</div>
                      </div>
                      <span class="material-symbols-outlined text-gray-400">chevron_right</span>
                  </div>

                  <div class="p-3 border-b border-gray-200 flex items-center justify-between cursor-pointer">
                      <div>
                          <div class="font-medium text-red-500">Delete My Account</div>
                          <div class="text-sm text-gray-600">Delete all messages and media</div>
                      </div>
                      <span class="material-symbols-outlined text-gray-400">chevron_right</span>
                  </div>
              </div>
          </div>
    `
}