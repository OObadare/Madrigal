class AddAnnotationToTracklists < ActiveRecord::Migration[5.1]
  def change
    add_column :tracklists, :annotation, :string
  end
end
