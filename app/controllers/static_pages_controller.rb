class StaticPagesController < ActionController::Base
    def frontend
      render file: Rails.root.join('public', 'index.html')
    end
  end

  def favicon
    send_file Rails.root.join('public', 'favicon.ico'), type: 'image/x-icon', disposition: 'inline'
  end