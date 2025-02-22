import { FC } from 'react';
import { 
  MagnifyingGlassIcon, 
  PlusIcon, 
  ChevronDownIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline';

const Workspace: FC = () => {
  const boards = [
    { id: 1, name: 'Main Projects', items: 24 },
    { id: 2, name: 'Marketing', items: 12 },
    { id: 3, name: 'Development', items: 18 },
  ];

  return (
    <div className="flex-1 overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b flex items-center px-6 bg-white">
        <div className="flex items-center flex-1">
          <h1 className="text-xl font-semibold mr-4">Workspace</h1>
          <button className="text-gray-500 hover:text-gray-700">
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
            <PlusIcon className="w-5 h-5 mr-2" />
            Add
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 overflow-auto h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 gap-6">
          {boards.map((board) => (
            <div key={board.id} className="bg-white rounded-lg shadow">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold">{board.name}</h2>
                  <span className="ml-2 text-sm text-gray-500">{board.items} items</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <EllipsisHorizontalIcon className="w-6 h-6" />
                </button>
              </div>
              
              {/* Board Content */}
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 border-b pb-2">
                  <div className="w-8"></div>
                  <div className="w-64">Task</div>
                  <div className="w-32">Status</div>
                  <div className="w-32">Due Date</div>
                  <div className="w-32">Priority</div>
                  <div className="flex-1">Owner</div>
                </div>
                
                {/* Sample Task Row */}
                <div className="flex items-center py-2 hover:bg-gray-50">
                  <div className="w-8">
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="w-64 font-medium">Website Redesign</div>
                  <div className="w-32">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">In Progress</span>
                  </div>
                  <div className="w-32 text-sm">Mar 15, 2024</div>
                  <div className="w-32">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">High</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm">
                      MH
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Workspace; 